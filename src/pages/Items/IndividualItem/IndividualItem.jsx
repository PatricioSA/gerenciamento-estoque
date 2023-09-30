import CustomButton from "../../../components/CustomButton";
import "./individualitem.css"

export default function IndividualItem() {
    return (
        <section className="individual__item">
            <div>
                <h2>7 Wonders</h2>
                <CustomButton title="Atualizar"
                    bgColor="#fff" color="black" />
                <CustomButton title="Excluir"
                    bgColor="red" />
            </div>

            <div>
                <div className="item__details">
                    <p>Categoria: Jogos</p>
                </div>
                <div className="item__details">
                    <p>Quantidade em estoque: 8</p>
                </div>
                <div className="item__details">
                    <p>Preço: R$399.99</p>
                </div>
            </div>

            <div>
                <p>Descrição</p>
            </div>

            <div>
                <p>Cadastrado em:</p>
                <p>Atualizado em:</p>
            </div>
        </section>
    )
}