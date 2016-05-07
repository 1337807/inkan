class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name
      t.string :title
      t.string :email, null: false
      t.string :github
      t.string :twitter
      t.string :linkedin
      t.string :facebook
    end
    
    add_index :users, [:email]
  end
end
