from models import init_db, get_db, User
from auth import get_password_hash

def init_database():
    # データベースの初期化
    init_db()
    
    # テストユーザーの作成
    db = next(get_db())
    
    # テストユーザーが存在しない場合のみ作成
    if not db.query(User).filter(User.username == "admin").first():
        test_user = User(
            username="admin",
            email="admin@example.com",
            hashed_password=get_password_hash("admin123"),
            is_active=True
        )
        db.add(test_user)
        db.commit()
        print("テストユーザーを作成しました")
    else:
        print("テストユーザーは既に存在します")

if __name__ == "__main__":
    init_database() 