import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID!;

function extractNewsMeta(page: any) {
  const titleProperty = Object.values(page.properties).find(
    (property: any) => property.type === "title"
  ) as any;

  const thumbnailFile = page.properties["썸네일"]?.files?.[0];
  const thumbnail = thumbnailFile?.file?.url ?? thumbnailFile?.external?.url ?? "";

  console.log("[notion] thumbnail url for", page.id, "=", thumbnail);

  return {
    id: page.id,
    badge: page.properties["카테고리"]?.select?.name ?? "공지",
    date: page.properties["날짜"]?.date?.start ?? "",
    title: titleProperty?.title?.[0]?.plain_text ?? "",
    thumbnail,
    featured: page.properties["Featured"]?.checkbox ?? false,
  };
}

export async function getNewsList() {
  const database = await notion.databases.retrieve({ database_id: databaseId });
  const dataSourceId = (database as any).data_sources[0].id;

  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    sorts: [{ property: "날짜", direction: "descending" }],
  });

  return response.results.map((page: any) => extractNewsMeta(page));
}

export async function getNewsById(id: string) {
  const page = await notion.pages.retrieve({ page_id: id });
  const blocks = await notion.blocks.children.list({ block_id: id });

  return {
    ...extractNewsMeta(page as any),
    blocks: blocks.results,
  };
}
