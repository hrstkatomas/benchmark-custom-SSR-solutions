import React from "react";

export function Props({
	data,
}: { data: Parameters<typeof JSON.stringify>[0] }) {
	return (
		<script
			// biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
			dangerouslySetInnerHTML={{
				__html: `window.props = ${JSON.stringify(data)}`,
			}}
		/>
	);
}
