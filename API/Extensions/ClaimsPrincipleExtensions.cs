using System.Security.Claims;

namespace API.Extensions;

public static class ClaimsPrincipleExtensions
{

    public static string GetUsername(this ClaimsPrincipal user)
    {
        var username = (user.FindFirst(ClaimTypes.Name)?.Value) ?? throw new Exception("Cannot get username from the token");

        return username;
    }
}