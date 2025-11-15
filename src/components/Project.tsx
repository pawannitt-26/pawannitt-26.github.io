import { Box, Stack, Group, Text, Image } from "@mantine/core";
import React from "react";
import Icon from "./Icon";

const Project = ({
	project,
	index,
	length,
}: {
	project: {
		name: string;
		type: string;
		imageSrc: string;
		description: string;
		stack: string[];
		links: {
			name: string;
			url: string;
		}[];
	};
	index: number;
	length: number;
}) => {
	const isLeft = index % 2 !== 0;
	return (
		<Box
			key={index}
			className={`[box-shadow:0_10px_30px_-15px_#000000] md:shadow-none rounded-lg md:rounded-none overflow-hidden grid grid-cols-12 ${index != length - 1 ? "mb-[40px]" : ""
				}`}
		>
			<Box
				className={`z-10 col-span-full ${isLeft
					? "md:col-start-1 md:col-end-7"
					: "md:col-start-7 md:col-end-13"
					} row-span-full bg-transparent md:py-[30px]`}
			>
				<Stack
					spacing={0}
					className={`w-full h-full bg-primary bg-opacity-80 md:bg-transparent p-8 md:p-0 ${!isLeft && "md:text-right"
						}`}
				>
					<Text className="text-[12px] font-mono text-secondary tracking-wide mb-1">
						{project.type}
					</Text>

					<Text className=" my-1">
						<a
							className="cursor-pointer font-display font-semibold text-[clamp(22px,5vw,30px)] text-slate-200 hover:text-secondary transition-colors"
							href={project.links[0].url}
						>
							{project.name}
						</a>
					</Text>
					<Box
						dangerouslySetInnerHTML={{ __html: project.description }}
						className="md:shadow-xl md:p-5 md:bg-tertiary/80 md:rounded-lg leading-relaxed backdrop-blur-sm border border-white/5"
					></Box>
					<Group
						className={`my-2 flex-wrap gap-2 ${!isLeft && "md:justify-end"}`}
					>
						{project.stack.map((stack, index) => (
							<Text
								key={index}
								className="px-2 py-[2px] rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
							>
								{stack}
							</Text>
						))}
					</Group>

					<Group className={`mt-4 ${!isLeft && "md:justify-end"}`}>
						{project.links.map((link, index) => (
							<a
								className="h-[25px] w-[25px] opacity-80 hover:opacity-100 transition"
								href={link.url}
								key={index}
							>
								<Icon key={index} name={link.name} />
							</a>
						))}
					</Group>

				</Stack>
			</Box>
			<Box
				className={`col-span-full flex items-center justify-center ${isLeft ? "md:col-start-6 md:col-end-13" : "md:col-start-1 md:col-end-8"
					} row-span-full md:rounded-lg bg-primary p-4`}
			>
				<div className="w-[50%] h-[50%] md:w-[60%] md:h-auto aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
					<img
						src={project.imageSrc}
						alt="project image"
						className="w-full h-full object-cover rounded-lg"
					/>
				</div>
			</Box>

		</Box>
	);
};

export default Project;
