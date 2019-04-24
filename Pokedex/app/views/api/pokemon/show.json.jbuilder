json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :image_url,:item_ids

json.image_url asset_path(@pokemon.image_url)

json.set! 'Items' do 
  json.array! @pokemon.items.each do |item|
    json.extract! item, :name, :price
  end
end