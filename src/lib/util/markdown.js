/**
 * 
 * @param {string} source 
 * @returns {{type: string, content: string}[]}
 */
export const parseMarkdown = (source) => {
    const lines = source.split("\r\n");

    // create { type: 'markdown', content: '...' } objects until we hit a custom tag
    // then create { type: tag, content: '...' } objects until we hit another custom tag
    // then repeat

    const result = [];
    let current = [];
    let isInCodeBlock = false;
    for (const line of lines) {
        if (!isInCodeBlock && line.startsWith("```")) {
            isInCodeBlock = true;
            current.push(line);
            continue;
        }
        if (isInCodeBlock && line === "```") {
            isInCodeBlock = false;
            current.push(line);
            continue;
        }
        if (isInCodeBlock) {
            current.push(line);
            continue;
        }
        const customTag = getCustomTag(line);
        if (customTag) {
            if (current.length > 0) {
                result.push({ type: "markdown", content: current.join("\r\n") });
                current = [];
            }
            result.push(customTag);
        }
        else {
            current.push(line);
        }
    }

    if (current.length > 0) {
        result.push({ type: "markdown", content: current.join("\r\n") });
    }

    return result;
}

const getCustomTag = (source) => {
    const youtube = readCustomTag(source, "youtube");
    if (youtube) return { type: "youtube", content: youtube }
    return undefined;
}

// Custom tags have to be on their own line
const readCustomTag = (source, tag) => {
    const regex = new RegExp(`^<${tag}>(.*)</${tag}>$`, "gm");
    const match = regex.exec(source);
    if (match) {
        return match[1];
    }
    return undefined;
}