# Budget App Project Backend

## Api calls
### Get all budget items
/budget
```
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

### Get one budget item
/budget/:index
<br>
/budget/1
```
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
