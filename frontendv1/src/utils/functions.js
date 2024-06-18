import { useEffect, useState } from "react";

function useResponsiveSize() {
	const [size, setSize] = useState(getSize());

	function getSize() {
		if (typeof window !== "undefined") {
			const width = window.innerWidth;
			if (width > 1024) {
				return 30;
			} else if (width > 768) {
				return 22;
			} else if (width > 640) {
				return 20;
			} else {
				return 18;
			}
		}
		return 20;
	}
	useEffect(() => {
		function handleResize() {
			setSize(getSize());
		}
		if (typeof window !== "undefined") {
			window.addEventListener("resize", handleResize);

			handleResize();

			return () => window.removeEventListener("resize", handleResize);
		}
	}, []);

	return size;
}

function useResponsiveContentDesign(contentSmall, contentMedium, contentLarg) {
	const [content, setContent] = useState([]);

	useEffect(() => {
		function handleResize() {
			setContent(getContent());
		}
		if (typeof window !== "undefined") {
			handleResize();
			window.addEventListener("resize", handleResize);
		}
		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	}, []);

	function getContent() {
		if (typeof window === "undefined") {
			return null;
		}
		const width = window.innerWidth;
		if (width < 640) {
			return contentSmall;
		}
		if (width < 1280) {
			return contentMedium;
		} else {
			return contentLarg;
		}
	}
	return content;
}

function useResponsiveContent(contentSmall, contentMedium) {
	const [content, setContent] = useState([]);

	useEffect(() => {
		function handleResize() {
			setContent(getContent());
		}

		if (typeof window !== "undefined") {
			handleResize();
			window.addEventListener("resize", handleResize);
		}

		return () => {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", handleResize);
			}
		};
	}, []);

	function getContent() {
		if (typeof window === "undefined") {
			return null;
		}

		const width = window.innerWidth;
		if (width < 640) {
			return contentSmall;
		} else {
			return contentMedium;
		}
	}

	return content;
}
export { useResponsiveSize, useResponsiveContent, useResponsiveContentDesign };
