using API.Entities;

namespace API.Interfaces;

public interface ITokenService
{   
    // this method will generate a token
    string CreateToken(AppUser user);
}
