"""Bank of Sandhu MCP server (M8, MCP-1).
 
One tool, exposed the standard way, so any MCP client (Claude Desktop, n8n,
the MCP Inspector) can call it. Made-up numbers for learning only.
"""
try:  # MCP Python SDK 2.x
    from mcp.server.mcpserver import MCPServer as Server
except ImportError:  # SDK 1.x
    from mcp.server.fastmcp import FastMCP as Server
 
mcp = Server("bank-of-sandhu")
 
EXPECTED_RATE = 0.0385  # 3.85% a year, expected, not guaranteed
 
 
@mcp.tool()
def calculate_profit_share(amount: float, months: int) -> dict:
    """Work out the expected profit share for a Bank of Sandhu Islamic savings account.
 
    Use this whenever a customer asks how much they could earn by saving money
    with Bank of Sandhu. Profit share is expected, not guaranteed.
    amount: how much the customer saves, in GBP (must be more than 0).
    months: how long they save for (1 to 60).
    """
    if amount <= 0 or not 1 <= months <= 60:
        return {"error": "amount must be more than 0 and months between 1 and 60"}
    expected_profit = round(amount * EXPECTED_RATE * months / 12, 2)
    return {
        "amount": amount,
        "months": months,
        "expected_profit": expected_profit,
        "rate": "3.85% a year, expected, not guaranteed",
        "source": "bank-of-sandhu MCP tool",
    }
 
 
if __name__ == "__main__":
    mcp.run()