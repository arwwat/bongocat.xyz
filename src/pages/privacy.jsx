import styles from '../styles/privacy.module.scss'

const Privacy = () => {
	return (
		<div className={styles.container}>
			<a href='/'> ⬅ Back to generator</a>
			<h1>Privacy Policy</h1>
			<p>Last update: 03.03.2024</p>
			<ol>
				<li>Type of information collected: When you use our site, Google may collect certain information about your activity, such as pages viewed, clicks, geographic location and device identifiers.</li>
				<li>Use of collected data: The information collected is used to deliver personalized advertising. Google may use cookies and device identifiers to determine your advertising interests and tailor ads to your preferences.</li>
				<li>Managing your advertising preferences: You have the ability to manage your advertising preferences through your Google account settings and Google's advertising tools. You can turn off personalized ads based on your interests and customize your advertising preferences.</li>
				<li>Sharing data with third parties: We do not share the data we collect with third parties without your consent, unless required by law.</li>
				<li>Data security: We use appropriate security measures to protect your data from unauthorized access, loss or disclosure.</li>
				<li>Contact: If you have any questions about our privacy policy or how we use your data, please contact us at contact@bongocat.xyz.</li>
				<li>Changes to Privacy Policy: The privacy policy may change depending on the development of our business or changes in legislation. Any change will be published on this page.</li>
			</ol>
		</div>
	)
}

export default Privacy
