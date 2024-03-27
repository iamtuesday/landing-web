// import * as notion from '@notionhq/client'
// import { defineDatabase, makeSource } from 'contentlayer-source-notion'

// const client = new notion.Client({ auth: process.env.NOTION_TOKEN })

// export const Post = defineDatabase(() => ({
// 	name: 'Post',
// 	databaseId: process.env.NOTION_DATABASE_ID as string,
// 	query: {
// 		filter: {
// 			property: 'Status',
// 			status: { equals: 'Published' }
// 		}
// 	},
// 	properties: {
// 		date: { name: 'Created time' }
// 	},
// 	computedFields: {
// 		url: { type: 'string', resolve: post => `/posts/${post._id}` }
// 	}
// }))

// export default makeSource({ client, databaseTypes: [Post] })
