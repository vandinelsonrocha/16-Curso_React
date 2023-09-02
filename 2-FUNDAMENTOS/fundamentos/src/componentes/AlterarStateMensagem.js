const AlterarStateMensagem = ({lidar}) => {
    const mensagens = ["Oi!", "Olá!", "Oii, tudo bem?"]
  return (
    <div>
        <button onClick={() => lidar(mensagens[0])}>1</button>
        <button onClick={() => lidar(mensagens[1])}>2</button>
        <button onClick={() => lidar(mensagens[2])}>3</button>
    </div>
  )
}
export default AlterarStateMensagem;