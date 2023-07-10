import axios from 'axios';

interface Repository {
  name: string;
  description: string;
  html_url: string;
}

// Function to fetch repositories by username
export async function getRepositories(username: string): Promise<Repository[]> {
  try {
    const response = await axios.get<Repository[]>(`https://api.github.com/users/${username}/repos`);
    return response.data;
  } catch (error: any) {
    console.error(`Error fetching repositories for ${username}:`, error.message);
    throw error;
  }
}
