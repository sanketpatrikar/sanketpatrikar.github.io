import { Tweet as ReactTweet } from "react-tweet";

interface TweetProps {
	id: string;
}

export const Tweet = ({ id }: TweetProps) => (
	<div className="my-6 flex justify-center">
		<ReactTweet id={id} />
	</div>
);
