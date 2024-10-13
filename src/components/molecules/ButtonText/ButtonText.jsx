import React from 'react';
import Button from '../../atoms/Button';
import Text from '../../atoms/Text';

const ButtonText = ({ onClick, text }) => {
    return (
        <Button onClick={onClick}>
            <Text>{text}</Text>
        </Button>
    );
};

export default ButtonText;
