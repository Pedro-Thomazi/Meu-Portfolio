import { useState } from 'react'
import styles from './SecondHeader.module.css'

const SecondHeader = () => {
    const date = new Date()
    const [year, setYear] = useState(date.getFullYear())
    const [month, setMonth] = useState(date.getMonth())
    const [dayOfWeek, setDaysOfWeek] = useState(date.getDay())
    const [day, setDay] = useState(date.getDate())
    const months = [
        { name: 'Janeiro'},
        { name: 'Fevereiro'},
        { name: 'Março'},
        { name: 'Abril'},
        { name: 'Maio'},
        { name: 'Junho'},
        { name: 'Julho'},
        { name: 'Agosto'},
        { name: 'Setembro'},
        { name: 'Outubro'},
        { name: 'Novembro'},
        { name: 'Dezembro'}
    ]

    const daysOfWeek = [
        { name: 'Domingo'},
        { name: 'Segunda-Feira'},
        { name: 'Terça-Feira'},
        { name: 'Quarta-Feira'},
        { name: 'Quinta-Feira'},
        { name: 'Sexta-Feira'},
        { name: 'Sábado'}
    ]

  return (
    <div className={styles.secondHeader}>
        <h4>Edição Especial - Ano XXI - Nº77</h4>
        <h4><strong>{daysOfWeek[dayOfWeek].name}</strong> {day} de {months[month].name} de {year}</h4>
        <h4>Preço R$1,00</h4>
    </div>
  )
}

export default SecondHeader