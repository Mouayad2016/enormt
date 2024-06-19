import CenterLayout from "@/comp/components/CenterLayout";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import Image from "next/image";
function ContactForm() {
	const { t } = useTranslation("common");
	const { locale } = useRouter();
	const isRTL = locale === "ar";
	return (
		<CenterLayout>
			<div className='flex flex-col md:flex-row justify-center mb-12 md:h-[580px]  '>
				<div
					className={`bg-gray-300 bg-opacity-75 w-full md:w-3/5 ${
						isRTL
							? "md:rounded-br-none md:rounded-l-2xl"
							: "md:rounded-br-none md:rounded-l-2xl"
					} `}
				>
					<div
						className={`glass-effect h-full w-full ${
							isRTL
								? "md:rounded-br-none md:rounded-l-2xl"
								: "md:rounded-br-none md:rounded-l-2xl"
						} `}
					>
						<form className='text-black flex flex-col p-4 h-full'>
							<h3 className='text-2xl font-bold mb-6'>
								{t("contact.form.title")}
							</h3>

							<label htmlFor='name' className='mb-1 font-semibold'>
								{t("contact.form.labels.name")} :
							</label>
							<input
								className='p-2 mb-4 bg-white rounded-md border-2 border-white focus:border-thistle focus:outline-none'
								type='text'
								id='name'
								name='name'
								required
							/>

							<label htmlFor='email' className='mb-1 font-semibold'>
								{t("contact.form.labels.email")} :
							</label>
							<input
								className='p-2 mb-4 bg-white rounded-md border-2 border-white focus:border-thistle focus:outline-none'
								type='email'
								id='email'
								name='email'
								required
							/>

							<label htmlFor='phone' className='mb-1 font-semibold'>
								{t("contact.form.labels.phone")} :
							</label>
							<input
								className='p-2 mb-4 bg-white rounded-md border-2 border-white focus:border-thistle focus:outline-none'
								type='tel'
								id='phone'
								name='phone'
							/>

							<label htmlFor='message' className='mb-1 font-semibold'>
								{t("contact.form.labels.message")} :
							</label>
							<textarea
								className='p-2 mb-4 bg-white rounded-md border-2 border-white focus:border-thistle focus:outline-none'
								id='message'
								name='message'
								required
							></textarea>

							<div className='mb-4 flex items-center gap-2'>
								<input
									type='checkbox'
									id='privacy'
									name='privacy'
									required
									className='checkbox_input'
								/>
								<label htmlFor='privacy' className='flex-1'>
									{t("contact.form.labels.policy")}
								</label>
							</div>

							<button
								type='submit'
								className='mt-4 bg-thistle hover:bg-thistle-dark text-white font-bold p-2 rounded-xl shadow-lg transition-colors duration-300 ease-in-out'
							>
								{t("contact.form.labels.submit_button")}
							</button>
						</form>
					</div>
				</div>
				<Image
					className={`w-full h-full md:w-2/5 object-cover shadow-lg ${
						isRTL
							? "md:rounded-br-none md:rounded-l-3xl"
							: "md:rounded-bl-none md:rounded-r-3xl"
					}   object-center`}
					src={"/images/general/contact_us.png"}
					width={1000}
					height={1000}
					alt={"asdas"}
				/>{" "}
			</div>
		</CenterLayout>
	);
}

export default ContactForm;
