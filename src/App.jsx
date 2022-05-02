// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
	const [messageList, setMessageList] = useState([]);
	const [autor, setAutor] = useState('');
	const [text, setText] = useState('');
	const addMessage = () => {
		let numId = Math.random()*100;
		let objMessage = {name: autor, message: text, id: numId};
		setMessageList([...messageList, objMessage]);
	}


	useEffect (() => {
		setTimeout(() => {
			if (messageList.length > 0) {
				alert('Сообщение доставлено');
			}
		}, 1500)
	}, [messageList])



	return (
		<div className='wrapper'>
			<div className='box'>
				<span>Введите своё имя</span>
				<input value={autor} className='name' onChange={(event) => setAutor(event.target.value)} />
				<span>Введите сообщение</span>
				<textarea value={text} className='msg' cols="30" rows="10" onChange={(event) => setText(event.target.value)}/>
				<button className='btn' onClick={addMessage}>Отправить</button>
			</div>
			
			{messageList.map((elem) => {
				return (
					<div key={elem.id} className = 'message-list'>
						<div className='send-message'>
							<div>
								<span>
									{elem.name}
								</span>
							</div>
							<div className='text'>
								<p>
									{elem.message}
								</p>
							</div>
						</div>
					</div>
				)
			})}
		</div>
	)
}



export default App;