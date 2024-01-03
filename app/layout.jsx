import MainLayout from "./MainLayout";

export const metadata = {
	title: "Harun Pasuli",
	description: "Harun Pasuli Portfolio Website",
};

export default function RootLayout({ children }) {
	return <MainLayout>{children}</MainLayout>;
}
