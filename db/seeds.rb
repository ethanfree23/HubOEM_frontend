# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

User.destroy_all
Fact.destroy_all
Location.destroy_all

# db/seeds.rb

require 'faker'

20.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password_digest: Faker::Internet.password,
    phone: Faker::PhoneNumber.phone_number,
    reset_password_token: Faker::Alphanumeric.alphanumeric(number: 10),
    reset_password_sent_at: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
    remember_created_at: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
    sign_in_count: Faker::Number.between(from: 0, to: 100),
    current_sign_in_at: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
    last_sign_in_at: Faker::Time.between(from: DateTime.now - 1, to: DateTime.now),
    current_sign_in_ip: Faker::Internet.ip_v4_address,
    last_sign_in_ip: Faker::Internet.ip_v4_address
  )
end


20.times do
  Location.create(
    latitude: Faker::Address.latitude.to_f,
    longitude: Faker::Address.longitude.to_f,
    label: %w(historic real_estate horror geography street_art bar_crawl).sample,
  )
end

20.times do
  Fact.create(
    label: %w(historic real_estate horror geography street_art bar_crawl).sample,
    text: Faker::Lorem.sentence,
    location: Location.all.sample,
  )
end
