import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";

export const Route = createFileRoute("/resume")({ component: Resume });

function Resume() {
	return (
		<>
			<Header>Resume</Header>

			<div className="resume-content">
				<div className="header-line" />

				<h1 className="name">Sanket Patrikar</h1>
			<p className="subtitle">Software Engineer</p>

			<div className="contact-info">
				<p className="location">Nagpur, Maharashtra</p>
				<p>
					<strong>Email:</strong>{" "}
					<a href="mailto:sanketspatrikar@gmail.com">sanketspatrikar@gmail.com</a>
				</p>
				<p>
					<strong>LinkedIn:</strong>{" "}
					<a href="https://www.linkedin.com/in/sanketpatrikar">
						linkedin.com/in/sanketpatrikar
					</a>
				</p>
			</div>

			<h2>Skills</h2>
			<div className="skills">
				<p>
					<strong>Languages —</strong> HTML, CSS, JavaScript / TypeScript, Java, SQL
				</p>
				<p>
					<strong>Frameworks &amp; Libraries —</strong> React, React Query, TanStack
					Start, Vite, NodeJS / Bun, PostgreSQL
				</p>
				<p>
					<strong>Tools —</strong> Git, Docker
				</p>
			</div>

			<h2>Experience</h2>
			<h3>Kizora Software Pvt. Ltd.</h3>
			<p className="job-title">
				Software Engineer <span className="dates">— September 2023 - Present</span>
			</p>
			<ul>
				<li>
					Migrated a React app from Webpack to <span className="highlight">Vite</span>{" "}
					to speed up build times{" "}
					<span className="highlight">from 15 min to 10 seconds</span>.
				</li>
				<li>
					Implemented <span className="highlight">lazy loading</span> to reduce the
					amount of code a page needs to fetch, improving page load times across the
					site.
				</li>
				<li>
					Reduced build size from <span className="placeholder">X to Y</span>.
				</li>
				<li>
					Upgraded React 15 to 19, refactoring core class components to hooks and
					modernizing core modules.
				</li>
				<li>
					Updated the <span className="highlight">Node</span> version from v8 to v25,
					updated packages to latest versions, and fixed breakages to ensure
					compatibility.
				</li>
				<li>
					Migrated React Router v4 to v7, building a custom HOC to bridge class and
					function components during transition.
				</li>
				<li>
					<span className="highlight">Load tested</span> backend modules with{" "}
					<span className="highlight">JMeter</span>; identified concurrency limits that
					were later improved, with parts moving to a reader instance.
				</li>
				<li>
					<span className="highlight">Optimized high-frequency SQL queries</span> for
					scheduled reports, reducing execution time from{" "}
					<span className="placeholder">~8s to under 500ms</span> through index tuning
					and query rewrites.
				</li>
			</ul>

			<h2>Education</h2>
			<h3>Bachelor's of Engineering in IT</h3>
			<p className="job-title">
				KDK College of Engineering, Nagpur{" "}
				<span className="dates">— August 2019 - May 2023</span>
			</p>

			<a
				href="/resume-sanket-patrikar.pdf"
				download
				className="download-btn"
				title="Download PDF"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
					<polyline points="7 10 12 15 17 10" />
					<line x1="12" y1="15" x2="12" y2="3" />
				</svg>
			</a>

			<style>{`
				.resume-content {
					font-family: 'Nunito Sans', 'Proxima Nova', sans-serif;
					font-size: 11pt;
					line-height: 1.4;
					color: #000;
					max-width: 650px;
					margin-left: calc(40px + 1.75rem);
					padding-bottom: 80px;
					background: #fff;
				}

				.header-line {
					width: 100%;
					height: 6px;
					background: #53bb84;
					margin-bottom: 12pt;
				}

				h1.name {
					font-size: 30pt;
					font-weight: 400;
					color: #353744;
					margin-bottom: 0;
				}

				.subtitle {
					font-size: 18pt;
					color: #00ab44;
					margin-bottom: 4pt;
				}

				.contact-info {
					color: #434343;
					margin-bottom: 6pt;
				}

				.contact-info .location {
					color: #666;
				}

				.contact-info strong {
					font-weight: 700;
				}

				.contact-info a {
					color: inherit;
					text-decoration: none;
				}

				.contact-info a:hover {
					text-decoration: underline;
				}

				.resume-content h2 {
					font-size: 14pt;
					font-weight: 700;
					color: #00ab44;
					margin-top: 24pt;
					margin-bottom: 10pt;
				}

				.resume-content h3 {
					font-size: 12pt;
					font-weight: 700;
					color: #353744;
					margin-top: 10pt;
					margin-bottom: 0;
				}

				.job-title {
					font-size: 12pt;
					color: #353744;
				}

				.job-title .dates {
					font-style: italic;
					color: #666;
					font-size: 10pt;
				}

				.skills p {
					margin: 4pt 0;
				}

				.skills strong {
					font-size: 12pt;
				}

				.resume-content ul {
					margin: 8pt 0 0 36pt;
					padding: 0;
				}

				.resume-content li {
					margin: 4pt 0;
					line-height: 1.3;
				}

				.resume-content li::marker {
					content: "‒  ";
				}

				.highlight {
					text-decoration: underline;
				}

				.placeholder {
					color: #ff0000;
					text-decoration: underline;
				}

				.download-btn {
					position: fixed;
					bottom: 24px;
					right: 24px;
					width: 48px;
					height: 48px;
					background: #e5e7eb;
					color: #353744;
					border-radius: 50%;
					display: flex;
					align-items: center;
					justify-content: center;
					box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
					transition: background-color 0.2s, transform 0.2s;
					text-decoration: none;
				}

				.download-btn:hover {
					background: #d1d5db;
					transform: scale(1.05);
				}

				.download-btn:active {
					transform: scale(0.95);
				}

				@media (max-width: 640px) {
					.resume-content {
						font-size: 10pt;
						margin-left: 0;
					}

					h1.name {
						font-size: 22pt;
					}

					.subtitle {
						font-size: 14pt;
					}

					.resume-content h2 {
						font-size: 12pt;
						margin-top: 18pt;
						margin-bottom: 8pt;
					}

					.resume-content h3 {
						font-size: 11pt;
					}

					.job-title {
						font-size: 11pt;
					}

					.job-title .dates {
						font-size: 9pt;
					}

					.skills strong {
						font-size: 11pt;
					}

					.resume-content ul {
						margin-left: 20pt;
					}

					.download-btn {
						width: 48px;
						height: 48px;
						bottom: 16px;
						right: 16px;
					}

					.download-btn svg {
						width: 20px;
						height: 20px;
					}
				}
			`}</style>
			</div>
		</>
	);
}
