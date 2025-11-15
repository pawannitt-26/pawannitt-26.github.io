import { Center, Box, Tabs } from "@mantine/core";
import React, { useEffect } from "react";
import Work from "./Work";

interface ExperienceItem {
	company: string;
	companyUrl: string;
	role: string;
	startDate: string;
	endDate: string;
	description: string[];
}

interface ExperienceProps {
	title: string;
	experiences: ExperienceItem[];
}

const Experience: React.FC<ExperienceProps> = ({ title, experiences }) => {
	const [mobile, setMobile] = React.useState(false);

	useEffect(() => {
		setMobile(window.innerWidth < 768);
	}, []);

	return (
		<Center id="experience" className="cursor-default py-[120px]">
			<Box className="w-full max-w-[900px] px-[20px] sm:px-[40px] md:px-[80px] lg:px-[0px] flex flex-col gap-10">

				<Center className="flex w-full items-center font-display font-semibold text-[clamp(26px,4vw,32px)] text-slate-200 whitespace-nowrap">
					{title}
					<span className="ml-4 h-[1px] w-full bg-slate-700"></span>
				</Center>

				<Box className="w-full">
					<Tabs
						classNames={{
							root: "w-full flex gap-10",
							tabsListWrapper: "!border-l-[1px] border-slate-700 pr-6",
							tabsList: "flex flex-col gap-3 pt-2",
							tabControl:
								"font-mono text-sm text-slate-400 hover:text-slate-200 transition-colors rounded-none !px-3 !py-2 whitespace-nowrap shrink-0",
							tabActive:
								"!border-l-2 !border-secondary !text-secondary bg-secondary/10",
							tabLabel: "!text-left whitespace-nowrap",
						}}
						orientation={mobile ? "horizontal" : "vertical"}
					>
						{experiences
							.sort((a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime())
							.map((experience: ExperienceItem, i) => (
								<Tabs.Tab
									key={i}
									label={experience.company}
									value={experience.company}
								>
									<Work {...experience} />
								</Tabs.Tab>
							))}
					</Tabs>
				</Box>
			</Box>
		</Center>
	);
};

export default Experience;
