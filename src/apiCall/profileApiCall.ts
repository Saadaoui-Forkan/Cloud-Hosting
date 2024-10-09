import { DOMAIN } from "@/utils/constants";
import { ProfileType } from "@/utils/types";

// Get Profile
export async function getProfile (token: string, id: number) : Promise<ProfileType> {
    const response = await fetch(`${DOMAIN}/users/profile/${id}`, {
      headers: {
        Cookie: `jwtToken=${token}`
      }
    });
  
    if(!response.ok){
      throw new Error('Failed to fetch profile')
    }
  
    return response.json()
  }