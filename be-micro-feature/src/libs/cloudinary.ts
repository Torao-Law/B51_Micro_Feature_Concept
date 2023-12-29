import { v2 as cloudinary } from "cloudinary"

export default new class CloudinaryConfig {
  upload() {
    cloudinary.config({
      cloud_name: 'dje5tgwuj',
      api_key: '451686618445968',
      api_secret: 'ik0zVU-GMVEXJI--0QK16fqU23M',
      secure: true,
    })
  }

  async destination(image: string) : Promise<any> {
    try {
      return await cloudinary.uploader.upload(`src/uploads/${image}`)
    } catch (error) {
      throw error
    }
  }
}