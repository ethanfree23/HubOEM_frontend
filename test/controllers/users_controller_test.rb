require "test_helper"

class UsersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @user = users(:one)
  end

  test "should get index" do
    get users_url, as: :json
    assert_response :success
  end

  test "should create user" do
    assert_difference("User.count") do
      post users_url, params: { user: { current_sign_in_at: @user.current_sign_in_at, current_sign_in_ip: @user.current_sign_in_ip, email: @user.email, first_name: @user.first_name, last_name: @user.last_name, last_sign_in_at: @user.last_sign_in_at, last_sign_in_ip: @user.last_sign_in_ip, password_digest: @user.password_digest, phone: @user.phone, remember_created_at: @user.remember_created_at, reset_password_sent_at: @user.reset_password_sent_at, reset_password_token: @user.reset_password_token, sign_in_count: @user.sign_in_count } }, as: :json
    end

    assert_response :created
  end

  test "should show user" do
    get user_url(@user), as: :json
    assert_response :success
  end

  test "should update user" do
    patch user_url(@user), params: { user: { current_sign_in_at: @user.current_sign_in_at, current_sign_in_ip: @user.current_sign_in_ip, email: @user.email, first_name: @user.first_name, last_name: @user.last_name, last_sign_in_at: @user.last_sign_in_at, last_sign_in_ip: @user.last_sign_in_ip, password_digest: @user.password_digest, phone: @user.phone, remember_created_at: @user.remember_created_at, reset_password_sent_at: @user.reset_password_sent_at, reset_password_token: @user.reset_password_token, sign_in_count: @user.sign_in_count } }, as: :json
    assert_response :success
  end

  test "should destroy user" do
    assert_difference("User.count", -1) do
      delete user_url(@user), as: :json
    end

    assert_response :no_content
  end
end
