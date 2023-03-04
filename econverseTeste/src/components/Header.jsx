import { Logo } from '../Logo'
import { OutIcon } from '../icons/OutIcon'
import { StorageIcon } from '../icons/StorageIcon'
import { UserIcon } from '../icons/UserIcon'
import { FavoriteIcon } from '../icons/FavoriteIcon'
import { SearchIcon } from '../icons/SeachIcon'

import { AiOutlineCreditCard } from 'react-icons/ai';
import { BsTruck } from 'react-icons/bs';
import { BsShieldCheck } from 'react-icons/bs';
import { TbCrown } from 'react-icons/tb';


import '../styles/components/header.sass'




export function Header() {
	return (
		<div id='container'>
			<div id='heading'>
				
				<p> <BsShieldCheck /> compra 100% segura </p>
				<p><BsTruck/> Frete grátis acima de R$ 200</p>
				<p><AiOutlineCreditCard/> Parcele suas compras</p>
			</div>

			<div id='header-main'>
				<Logo />
				<div id='searchbar'>
					<input type='text' placeholder='O que você está buscando?' />
					<div id='lupa'><SearchIcon /></div>
				</div>
				<ul>
					<li>
						<OutIcon />
					</li>
					<li>
						<FavoriteIcon />
					</li>
					<li>
						<UserIcon />
					</li>
					<li>
						<StorageIcon/>
					</li>
				</ul>
			</div>
			<div id='search'>
				<a className='' href=''></a>
			</div>

			<div id='category'>
				<p>Todas Categorias</p>
				<p>Supermercado</p>
				<p>Livros</p>
				<p>Moda</p>
				<p>Lançamentos</p>
				<p>Ofertas do dia</p>
				<p id='crow'> <TbCrown /> Assinatura</p>
			</div>

	
		</div>
	)
}
