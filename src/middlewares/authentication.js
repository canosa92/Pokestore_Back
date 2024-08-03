const { admin } = require('../config/firebase'); // Ajusta la ruta según sea necesario

const authentication = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No se proporcionó token de autenticación' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        req.user = decodedToken;
        next();
    } catch (error) {
        console.error('Error de autenticación:', error);
        return res.status(401).json({ message: 'Token inválido o no se pudo verificar' });
    }
};

module.exports = authentication;
