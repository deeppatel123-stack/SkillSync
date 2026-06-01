const mongoose = require('mongoose');

/**
 * User schema – students, colleges, companies, and superadmin.
 * Roles match the frontend: student | college | company | superadmin
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ['student', 'college', 'company', 'superadmin'],
      required: true,
    },
    organization: { type: String, trim: true, default: '' },
    phone: { type: String, trim: true, default: '' },
    bio: { type: String, default: '' },
    location: { type: String, default: '' },
    website: { type: String, default: '' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

// Hide password when converting document to JSON
userSchema.methods.toPublicJSON = function () {
  return {
    id: this._id.toString(),
    name: this.name,
    email: this.email,
    role: this.role,
    organization: this.organization,
    phone: this.phone,
    bio: this.bio,
    location: this.location,
    website: this.website,
    createdAt: this.createdAt,
  };
};

module.exports = mongoose.model('User', userSchema);
