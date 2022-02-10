export interface SHARE {
	body: string;
	title: string;
	source: string;
	hashtags?: string[];
}
interface SHARE_TO_TWITTER {
	body: string;
	source: string;
	hashtags: string[];
	via: string;
}
interface SHARE_TO_LINKEDIN {
	body: string;
	title: string;
	source: string;
}

function toTwitter({ source, body, hashtags: tags, via }: SHARE_TO_TWITTER): string {
	const base = "https://twitter.com/intent/tweet";
	const hashtags = tags.join(", ");
	return `${base}?text="${body}"&url=${source}&hashtags=${hashtags}&via=${via}`;
}
function toLinkedIn({ body, source, title }: SHARE_TO_LINKEDIN): string {
	const base = "https://www.linkedin.com/shareArticle";
	return `${base}?mini=true&url=${source}&title=${title}&summary=${body}&source=${source}`;
}

export function handleShare(props: SHARE) {
	// URL = window.location.href;

	const body = `${encodeURIComponent(props.body)}`;
	const title = encodeURIComponent(props.title);
	const source = encodeURIComponent(props.source);

	return {
		toTwitter: toTwitter({
			body,
			source,
			hashtags: props.hashtags || [],
			via: "inqling_studio",
		}),
		toLinkedIn: toLinkedIn({
			body,
			title,
			source,
		}),
	};
}
