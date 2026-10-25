"""Talk to the Bank of Sandhu MCP server the way an AI app would: start it, list its tools, call one."""
import asyncio, sys
from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client
async def main():
    params = StdioServerParameters(command=sys.executable, args=["learning/mcp_server.py"])
    async with stdio_client(params) as (r, w):
        async with ClientSession(r, w) as s:
            await s.initialize()
            print([t.name for t in (await s.list_tools()).tools])
            res = await s.call_tool("calculate_profit_share", {"amount": 5000, "months": 12})
            print(res.content[0].text if res.content else res)
asyncio.run(main())