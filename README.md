# API Controle Vagas de Garagem
This project is an API CRUD


## Particle Notes
This project has a Front-End, check it out:<br>
[Site controle vagas de garagem](https://github.com/rafaelcesar0/site-controle-vagas-de-garagem)


## HTTP Requests Types 
### GET
<details>
<summary>Details</summary>

#### Apartment All with Vehicle
`http://localhost:3000/apartamento`

```json
[
  {
    "id": 3,
    "bloco": 1,
    "apartamento": 305,
    "morador": "Lucas Aragão",
    "telefone": "85933334444",
    "email": "lucasaragao@gmail.com",
    "veiculos": [
      {
        "id": 9,
        "marca": "Ferrari",
        "modelo": "296-GTB",
        "cor": "Vermelha",
        "placa": "PAZ2011"
      }
    ]
  },
  {
    "id": 1,
    "bloco": 1,
    "apartamento": 30,
    "morador": "Marcio José",
    "telefone": "85933332222",
    "email": "marciojose@gmail.com",
    "veiculos": [
      {
        "id": 10,
        "marca": "Ferrari",
        "modelo": "296-GTB",
        "cor": "Vermelha",
        "placa": "PAZ2006"
      },
      {
        "id": 11,
        "marca": "Ferrari",
        "modelo": "296-GTB",
        "cor": "Vermelha",
        "placa": "PAZ2007"
      }
    ]
  }
]
```
#### Apartment : ID with Vehicle
`http://localhost:3000/apartamento/1`

```json
{
  "id": 1,
  "bloco": 1,
  "apartamento": 30,
  "morador": "Marcio José",
  "telefone": "85933332222",
  "email": "marciojose@gmail.com",
  "veiculos": [
    {
      "id": 10,
      "marca": "Ferrari",
      "modelo": "296-GTB",
      "cor": "Vermelha",
      "placa": "PAZ2006"
    },
    {
      "id": 11,
      "marca": "Ferrari",
      "modelo": "296-GTB",
      "cor": "Vermelha",
      "placa": "PAZ2007"
    }
  ]
}
```

#### Vehicle All
`http://localhost:3000/veiculo`

```json
[
  {
    "id": 9,
    "marca": "Ferrari",
    "modelo": "296-GTB",
    "cor": "Vermelha",
    "placa": "PAZ2011"
  },
  {
    "id": 10,
    "marca": "Ferrari",
    "modelo": "296-GTB",
    "cor": "Vermelha",
    "placa": "PAZ2006"
  },
  {
    "id": 11,
    "marca": "Ferrari",
    "modelo": "296-GTB",
    "cor": "Vermelha",
    "placa": "PAZ2007"
  }
]
```

#### Vehicle : ID
`http://localhost:3000/veiculo/10`

```json
{
  "id": 10,
  "marca": "Ferrari",
  "modelo": "296-GTB",
  "cor": "Vermelha",
  "placa": "PAZ2006"
}
```
</details>


### POST
<details>
<summary>Details</summary>

#### Apartament
`http://localhost:3000/apartamento`

```json
{
  "apartamento": 305,
  "bloco": 1,
  "morador": "Lucas Aragão",
  "telefone": "85933334444",
  "email": "lucasaragao@gmail.com"
}
```

#### Vehicle
`http://localhost:3000/veiculo/2` 2 is the apartment id because every vehicle needs to be associated with an apartment

```json
{
  "apartamento": 305,
  "bloco": 1,
  "morador": "Lucas Aragão",
  "telefone": "85933334444",
  "email": "lucasaragao@gmail.com"
}
```

</details>

### PUT
<details>
<summary>Details</summary>

#### Apartment
`http://localhost:3000/apartamento/1` 1 is the apartment id

```json
{
  "apartamento": 30,
  "bloco": 1,
  "morador": "Marcio José",
  "telefone": "85933332222",
  "email": "marciojose@gmail.com"
}
```

#### Vehicle
`http://localhost:3000/veiculo/1` 1 is the vehicle ID

```json
{
  "marca": "Ferrari",
  "modelo": "296-GTB",
  "cor": "Vermelha",
  "placa": "PAZ2003"
}
```

</details>

### DELETE
<details>
<summary>Details</summary>

#### Apartment
`http://localhost:3000/apartamento/1` 1 is the apartment ID

#### Vehicle
`http://localhost:3000/veiculo/1` 1 is the vehicle ID

</details>