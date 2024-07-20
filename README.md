# GET

<details>
<summary>Details</summary>

## Apartamnetos All with Veiculos

`http://localhost:3000/apartamento`

```json
[
  {
    "id": 3,
    "bloco": 1,
    "apartamento": 305,
    "morador": "Lucas Aragão",
    "telefone": "(85)933334444",
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
    "telefone": "(85)933332222",
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
## Apartamento : ID with Veiculos

`http://localhost:3000/apartamento/1`

```json
{
  "id": 1,
  "bloco": 1,
  "apartamento": 30,
  "morador": "Marcio José",
  "telefone": "(85)933332222",
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

## Veiculos All

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

## Veiculo : ID

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