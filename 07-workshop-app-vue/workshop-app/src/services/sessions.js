import axios from "axios";
import AppConfig from "@/config";

const { apiBaseUrl } = AppConfig;

const castVoteForASession = async (
  id,
  voteType /* 'upvote' | 'downvote' */
) => {
  const response = await axios.put(`${apiBaseUrl}/sessions/${id}/${voteType}`);
  return response.data;
};

const addSession = async (newSessionDetails) => {
  const response = await axios.post(
    `${apiBaseUrl}/sessions`,
    newSessionDetails,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export { castVoteForASession, addSession };
