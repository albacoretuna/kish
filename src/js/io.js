import io from 'socket.io-client';


const HOST = 'http://188.166.58.199:3000';

export default io.connect(HOST);
