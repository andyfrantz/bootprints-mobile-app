const createID = () => {
    return Array(24)
            .fill(0)
            .map(() => String.fromCharCode(Math.floor(Math.random() * 26) + 97))
            .join('') +
        Date.now().toString(24);
};

const CIRCULAR_ROUTES = [
    {
        id: createID(),
        name: 'Altrier',
        location: 'Altrier',
        region: 'mullerthal',
        type: 'circular',
        distance: 11.8,
        level: 'medium',
        duration: 150,
    },
    {
        id: createID(),
        name: 'Beaufort',
        location: 'Beaufort',
        region: 'mullerthal',
        type: 'circular',
        distance: 5.7,
        level: 'medium',
        duration: 105,
    },
    {
        id: createID(),
        name: 'Bech II',
        location: 'Bech',
        region: 'mullerthal',
        type: 'circular',
        distance: 10.7,
        level: 'medium',
        duration: null,
    },
    {
        id: createID(),
        name: 'Berdorf',
        location: 'Berdorf',
        region: 'mullerthal',
        type: 'circular',
        distance: 6.6,
        level: 'medium',
        duration: null,
    }
];

export default CIRCULAR_ROUTES;