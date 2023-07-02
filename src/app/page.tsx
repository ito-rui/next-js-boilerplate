import Body from '@/components/Box/Body';
import CountUpButton from '@/components/Button/CountButton';
import CountText from '@/components/Text/CountText';

export default function Home() {
	return (
		<Body width='100vw' height='100vh'>
			<CountText />
			<CountUpButton>+</CountUpButton>
		</Body>
	);
}
