import fs, { mkdirSync, writeFileSync } from 'fs';

const CONTENT_PATH = "content/";
const GENERATE_PATH = "src/generated/";

const buildContent = () => {
    const dir = fs.readdirSync(CONTENT_PATH, {
        recursive: true,
    })

    console.log("dir", dir)

    const directory = dir.sort((a, b) => a.name.localeCompare(b.name));

    const data = [];

    mkdirSync(GENERATE_PATH, { recursive: true });

    for (const item of directory) {
        if (item.isDirectory()) {
            const { name } = item;

            const files = fs.readdirSync(`${CONTENT_PATH}${name}/`, {
                recursive: true,
                withFileTypes: true,
            }).sort((a, b) => a.name.localeCompare(b.name));

            const section = readPage(name + "/", "0_index.md");

            if (!section) {
                console.warn(`Directory ${name} doesn't have a 0_index.md file. Please add a default page for this section.`);
                continue;
            }

            if (files.length > 1) {
                section.pages = [];
            }

            for (const file of files) {
                if (file.isFile()) {
                    const { name } = file;
                    const [fileName, extension] = name.split(".");

                    if (extension !== "md") {
                        console.warn(`${CONTENT_PATH + item.name}/${name}: Ignored file (Not Markdown)`)
                        continue;
                    }

                    if (fileName === "0_index") {
                        continue;
                    }
                    const page = readPage(item.name + "/", name)

                    if (!page.title) {
                        console.warn(`${CONTENT_PATH + item.name}/${name}: Invalid title (#)...`);
                    }

                    section.pages.push(page);

                }
            }

            data.push(section);
        }
    }

    console.log('Success!')
    if (false) contentTree(data)

    writeFileSync(`${GENERATE_PATH}pages.json`, JSON.stringify(data, null, 2));
}

function contentTree(obj, key = "", prefix = "", layer = 0) {
    let layerPrefix = layer > 0 ? "|" : "";
    for (let i = 0; i < layer; i++) {
        layerPrefix += " "
    }
    if (typeof obj === "string" && key.endsWith("[]")) {
        console.log(layerPrefix + prefix + obj);
    }
    if (typeof obj === "object" && obj["title"]) {
        console.log(layerPrefix + prefix + obj["title"]);
        prefix += obj["title"] + "/";
    }
    if (Array.isArray(obj)) {
        for (const _ of obj) {
            render(_, key + "[]", prefix, layer + 1);
        }
    }

    if (typeof obj === "object") {
        const keys = Object.keys(obj);
        for (const key of keys) {
            render(obj[key], key, prefix, layer + 1)
        }
    }
}

const readPage = (dir, fileName) => {
    try {
        const content = fs.readFileSync(`${CONTENT_PATH}${dir}${fileName}`, 'utf8');
        const title = readTitleFromMarkdown(content);
        const sections = readSectionsFromMarkdown(content);

        return {
            title,
            path: title ? title.toLowerCase().replace(".", '').replace(/[\W_]+/g, "-") : fileName,
            content,
            sections
        }
    } catch (err) {
        return undefined;
    }
}

const readTitleFromMarkdown = (content) => {
    const titleRegex = /^# (.*)$/gm;
    const title = titleRegex.exec(content);
    if (title) {
        return title[1];
    }
    return undefined;
}

const readSectionsFromMarkdown = (content) => {
    const sectionRegex = /^## (.*)$/gm;
    const sections = [];
    let title;
    while ((title = sectionRegex.exec(content)) !== null) {
        sections.push(title[1]);
    }
    return sections;
}

buildContent();