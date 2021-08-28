const {Client} = require('@notionhq/client')
const notion = new Client({
    auth: process.env.NOTION_TOKEN 
})
function addVideo({title,channelname,status})
{
notion.pages.create({
        parent:{
            database_id:process.env.DATABASE_ID
        },
        properties:{
            [process.env.NAME_ID]:{
              title:[
                {
                  type:"text",
                  text:{
                    content:title
                  }
                }
              ]
            },
            [process.env.CHANNEL_ID]:{
              "rich_text": [
                {
                  "type": "text",
                  "text": {
                    "content": channelname
                  }
                }
              ]
            },
            [process.env.COMPLETED_ID]:{
              "checkbox": status
            }
        }
    })
}

module.exports = {addVideo};