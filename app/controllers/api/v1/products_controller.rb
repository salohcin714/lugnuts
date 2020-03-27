module Api
  module V1
    class ProductsController < ApplicationController
      def index
        products = Product.all

        render json: {
            products: products
        }
      end

      def show
        product = Product.find_by(id: params[:id])

        render json: {
            product: product
        }
      end

      def create
        product = Product.new(product_params)

        if product.save
          render json: ProductSerializer.new(product).serialized_json
        else
          render json: {error: product.errors.messages}, status: 422
        end
      end

      def update
        product = Product.find_by(id: params[:id])

        if product.update(product_params)
          render json: ProductSerializer.new(product, options).serialized_json
        else
          render json: {error: product.errors.messages}, status: 422
        end
      end

      def destroy
        product = Product.find_by(id: params[:id])

        if product.destroy
          head :no_content
        else
          render json: {errors: product.errors.messages}, status: 422
        end
      end

      def search
        product = Product.where('description LIKE :search OR name LIKE :search', search: "%#{params[:search]}%")
        render json: ProductSerializer.new(product).serialized_json
      end

      private

      def product_params
        params.require(:product).permit(:name, :product_line_id, :retail, :image_url)
      end

      def options
        @options ||= {include: %i[reviews]}
      end
    end
  end
end
