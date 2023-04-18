# Budget App Project Backend

## Api calls

### Get all transactions

/transactions

```json
{
  "success": true,
  "data": [
    {
      "itemName": "Paycheck",
      "amount": 1000,
      "date": "2023-03-17",
      "from": "Work",
      "category": "Income"
    },
    {
      "itemName": "Hot Topic",
      "amount": -56,
      "date": "2023-03-18",
      "from": "Hot Topic",
      "category": "Clothing"
    }
  ]
}
```

### Get one transaction

/transactions/:index

/transactions/1

```json
{
  "success": true,
  "data": {
    "itemName": "Hot Topic",
    "amount": -56,
    "date": "2023-03-18",
    "from": "Hot Topic",
    "category": "Clothing"
  }
}
```
