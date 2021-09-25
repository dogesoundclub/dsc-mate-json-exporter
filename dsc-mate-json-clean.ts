import fs from "fs";
import database from "./database.json";

const db: any[] = [];

for (const token of database.collection) {
    const attributes: { trait_type: string, value: any, max_value?: number }[] = [{
        trait_type: "Level",
        value: token.levels.Attributes,
        max_value: 11,
    }];
    for (const [trait_type, value] of Object.entries(token.properties)) {
        attributes.push({ trait_type, value });
    }
    db.push({
        name: token.name,
        description: "클레이튼 체인 최초의 제너레이티브 아트, 도지사운드클럽의 투표권으로 사용됨.",
        image: `https://storage.googleapis.com/dsc-mate/336/dscMate-${token.tokenId}.png`,
        background_color: "#F6D613",
        sendable: true,
        attributes,
        external_url: `http://dogesound.club/mates/${token.tokenId}`,
    });
}

fs.writeFileSync("./new-database.json", JSON.stringify(db));
