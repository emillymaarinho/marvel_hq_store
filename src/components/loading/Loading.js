
import { Oval } from 'react-loader-spinner';
import { Load } from './Loading.styled';

const Loading = () => {
    return (
        <Load >
            <Oval color="red" secondaryColor="#ccc" height={80} width={80} />
        </Load>
    );
};

export default Loading;