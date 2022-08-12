class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email, null: false
      t.integer :phone_number
      t.string :password_digest
      t.string :session_token, null: false
      t.timestamps
    end

    add_index :users, :session_token
    add_index :users, :email, unique: true
    add_index :users, :phone_number, unique: true 

  end
end
