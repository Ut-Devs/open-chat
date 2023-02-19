import {
	d as i,
	_ as r,
	o as t,
	c as a,
	a as s,
	t as o,
	n as c,
	p as b,
	b as y,
	F as S,
	r as w,
	e as $,
	f as v,
	g as d,
} from './index-318c2000.js'
function k(e) {
	const n = new Date()
	return e.getDate() < n.getDate()
		? e.toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' })
		: e
				.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' })
				.replace(/(.*)\D\d+/, '$1')
}
const I = i({
	name: 'Messages',
	props: { message: { type: Object, required: !0 } },
	computed: {
		isSender() {
			return this.message.sender === 13
		},
		date() {
			return k(this.message.sendAt)
		},
	},
})
function D(e, n, p, l, u, m) {
	return (
		t(),
		a(
			'div',
			{
				class: c([
					{ 'message__wrapper--sender': e.isSender },
					{ 'message__wrapper--recipient': !e.isSender },
				]),
			},
			[
				s(
					'div',
					{
						class: c([
							{ 'message__wrapper--sender-content': e.isSender },
							{ 'message__wrapper--recipient-content': !e.isSender },
						]),
					},
					[s('span', null, o(e.message.content), 1)],
					2
				),
				s('span', null, o(e.date), 1),
			],
			2
		)
	)
}
const M = r(I, [
	['render', D],
	['__scopeId', 'data-v-510eecb1'],
])
const A = {},
	_ = (e) => (b('data-v-de7cab48'), (e = e()), y(), e),
	B = { class: 'wrapper' },
	L = _(() => s('textarea', { class: 'wrapper__input' }, null, -1)),
	C = _(() => s('button', { class: 'wrapper__button' }, 'Send', -1)),
	x = [L, C]
function F(e, n) {
	return t(), a('div', B, x)
}
const j = r(A, [
		['render', F],
		['__scopeId', 'data-v-de7cab48'],
	]),
	q = i({
		components: { SendMessageInput: j, Messages: M },
		data: () => ({
			messages: [
				{
					id: 1,
					content:
						'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys 							standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 							scrambled it to make a type specimen book.',
					sendAt: new Date(),
					recipient: 13,
					sender: 12,
				},
				{
					id: 2,
					content: 'ojhashudhiasd',
					sendAt: new Date(),
					recipient: 12,
					sender: 13,
				},
				{
					id: 3,
					content: 'Somos branquelos',
					sendAt: new Date(),
					recipient: 12,
					sender: 13,
				},
			],
		}),
	})
const N = { class: 'chat' },
	P = s('nav', { class: 'chat__header' }, null, -1),
	R = { class: 'chat__body' },
	V = { class: 'chat__form' }
function Z(e, n, p, l, u, m) {
	const g = d('Messages'),
		h = d('SendMessageInput')
	return (
		t(),
		a('div', N, [
			P,
			s('section', R, [
				(t(!0),
				a(
					S,
					null,
					w(
						e.messages,
						(f) => (t(), v(g, { message: f }, null, 8, ['message']))
					),
					256
				)),
			]),
			s('div', V, [$(h)]),
		])
	)
}
const E = r(q, [['render', Z]])
export { E as default }
