import tinycolor from 'tinycolor2';

const flatStringify = (obj) => JSON.stringify(obj, (key, value) => {
    if (key && Array.isArray(value)) {
        return [];
    } else if (key && value && typeof value === 'object') {
        return {};
    } else {
        return value;
    }
}).replace(/\[]/g, '[...]').replace(/\{}/g, '{...}');

const validateState = (state) => {
    if ('type' in state) {
        switch (state.type) {
            case 'container': {
                const unrecognizedKeysSet = new Set(Object.keys(state));
                unrecognizedKeysSet.delete('type');
                unrecognizedKeysSet.delete('items');

                if (unrecognizedKeysSet.size !== 0) {
                    throw new Error(`Unrecognized key${unrecognizedKeysSet.size > 1 ? 's' : ''} "${[...unrecognizedKeysSet].join('", "')}" in container ${flatStringify(state)}.`);
                }

                if (!('items' in state)) {
                    throw new Error(`No items in container ${flatStringify(state)}.`);
                }

                if (!Array.isArray(state.items)) {
                    throw new Error(`Unrecognized items ${flatStringify(state.items)} in container ${flatStringify(state)}.`);
                }

                state.items.forEach(validateState);

                break;
            }

            case 'box': {
                const unrecognizedKeysSet = new Set(Object.keys(state));
                unrecognizedKeysSet.delete('type');
                unrecognizedKeysSet.delete('color');

                if (unrecognizedKeysSet.size !== 0) {
                    throw new Error(`Unrecognized key${unrecognizedKeysSet.size > 1 ? 's' : ''} "${[...unrecognizedKeysSet].join('", "')}" in box ${flatStringify(state)}.`);
                }

                if ('color' in state && (typeof state.color !== 'string' || !tinycolor(state.color)._ok)) {
                    throw new Error(`Unrecognized color ${flatStringify(state.color)} in box ${flatStringify(state)}.`);
                }

                break;
            }

            default:
                throw new Error(`Unrecognized type "${state.type}" in ${flatStringify(state)}.`);
        }
    } else {
        throw new Error(`No type in ${flatStringify(state)}.`);
    }
};

export default validateState;
