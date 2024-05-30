def stuEntity(item) -> dict:
    print("stuEntity")
    print(item)
    return {
        "id": str(item["_id"]),
        "sno": item["sno"],
        "fname": item["fname"],
        "lname": item["lname"],
        "email": item["email"]
    }

def stusEntity(entity) -> dict:
    return [stuEntity(item) for item in entity]