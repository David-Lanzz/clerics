import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { createCleric, getClericById, updateCleric, uploadImage } from "../services";
import { toast } from "sonner";

export default function UserForm() {
  const [searchParams] = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    if (id) {
      getClericById(id).then(data => {
        setFormData(data?.cleric)
      })
    }
  }, [])

  const [imageData, toggleImageData] = useState(null)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subTitle: "",
    paragraph: [""],
    image: "",
    description: [{ key: "", value: "" }],
    priceList: [{ key: "", value: "" }],
  });

  const handleImage = (file) => {
    const imageUrl = URL.createObjectURL(file)
    setFormData(prev => {
      return { ...prev, image: imageUrl }
    })
    toggleImageData(file)
    console.log(imageUrl)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleArrayChange = (index, value, arrayName) => {
    setFormData((prev) => {
      const newArray = [...prev[arrayName]];
      newArray[index] = value;
      return { ...prev, [arrayName]: newArray };
    });
  };

  const handleKeyValueChange = (index, field, value, arrayName) => {
    setFormData((prev) => {
      const newArray = [...prev[arrayName]];
      newArray[index][field] = value;
      return { ...prev, [arrayName]: newArray };
    });
  };

  const addItem = (arrayName, item) => {
    setFormData((prev) => ({ ...prev, [arrayName]: [...prev[arrayName], item] }));
  };

  const removeItem = (arrayName, index) => {
    setFormData((prev) => {
      const newArray = prev[arrayName].filter((_, i) => i !== index);
      return { ...prev, [arrayName]: newArray };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id)
    if (!handleValidation()) {
      return
    }

    if (!id) {
      console.log('here')
      const imageFormData = new FormData()
      imageFormData.append('upload_preset', 'service')
      imageFormData.append('file', imageData)
      return uploadImage(imageFormData).then(response => {
        createCleric({ ...formData, image: response?.secure_url })
      })
    }

    if (imageData) {
      const imageFormData = new FormData()
      imageFormData.append('upload_preset', 'service')
      imageFormData.append('file', imageData)
      return uploadImage(imageFormData).then(response => {
        updateCleric({ id, payload: { ...formData, image: response?.secure_url } })
      })
    }

    return updateCleric({ id, payload: formData })
  };

  const handleValidation = () => {
    if (!formData.name) {
      toast.error("Fill in the name");
      return false;
    } else if (!formData.email || !formData.email.includes('@')) {
      toast.error("Fill in the correct email");
      return false;
    } else if (!formData.subTitle) {
      toast.error("Fill in the sub name");
      return false;
    } else if (formData.paragraph.some((p) => p.trim() === "")) {
      toast.error("Fill in all paragraphs");
      return false;
    } else if (!formData.image) {
      toast.error("Upload an image");
      return false;
    } else if (formData.description.some((desc) => !desc.value.trim())) {
      toast.error("Fill in all descriptions");
      return false;
    } else if (formData.priceList.some((price) => !price.key.trim() || !price.value.trim() || isNaN(price.value))) {
      toast.error("Fill in all price details");
      return false;
    }

    toast.success('Validation success')
    return true;
  };


  return (
    <div className="max-w-lg mx-auto p-6 mt-[7rem] bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Cleric Creation Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Inputs */}

        {['name', 'subTitle', 'email'].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            value={formData[field]}
          />
        ))}

        <span className="relative block w-full h-[20rem] overflow-hidden">
          <img src={formData?.image} className="w-full h-full" alt="" />
          <input type="file" onChange={(e) => handleImage(e.target.files[0])} className="absolute top-0 left-0 w-full h-full object-cover z-[2] opacity-0" />
        </span>

        {/* Dynamic Array Inputs */}
        {[
          { name: "paragraph", label: "paragraph", isKeyValue: false },
          { name: "description", label: "Description", isKeyValue: true },
          { name: "priceList", label: "Price List", isKeyValue: true },
        ].map(({ name, label, isKeyValue }) => (
          <div key={name} className="space-y-2">
            <p className="font-semibold">{label}</p>
            {formData[name].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex gap-2 items-center"
              >
                {isKeyValue ? (
                  <>
                    <input
                      value={item.key}
                      onChange={(e) => handleKeyValueChange(index, "key", e.target.value, name)}
                      placeholder="Key"
                      className="w-1/2 p-2 border rounded"
                    />
                    <input
                      value={item.value}
                      onChange={(e) => handleKeyValueChange(index, "value", e.target.value, name)}
                      placeholder="Value"
                      className="w-1/2 p-2 border rounded"
                    />
                  </>
                ) : (
                  <input
                    value={item}
                    onChange={(e) => handleArrayChange(index, e.target.value, name)}
                    placeholder={`${label} ${index + 1}`}
                    className="w-full p-2 border rounded"
                  />
                )}
                <button
                  type="button"
                  onClick={() => removeItem(name, index)}
                  className="p-2 bg-primary text-white rounded"
                >
                  ✕
                </button>
              </motion.div>
            ))}
            <button
              type="button"
              onClick={() => addItem(name, isKeyValue ? { key: "", value: "" } : "")}
              className="p-2 bg-tertiary text-white rounded w-full"
            >
              + Add {label}
            </button>
          </div>
        ))}
        <button type="submit" className="p-2 bg-primary text-white rounded w-full">
          {id ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
