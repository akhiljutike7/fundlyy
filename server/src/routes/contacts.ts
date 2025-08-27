import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const prisma = new PrismaClient();

// ✅ Get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await prisma.contact.findMany();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contacts" });
  }
});

// ✅ Create a new contact
router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newContact = await prisma.contact.create({
      data: { name, email, phone },
    });
    res.json(newContact);
  } catch (err) {
    res.status(500).json({ error: "Failed to create contact" });
  }
});

// ✅ Get contact by ID
router.get("/:id", async (req, res) => {
  try {
    const contact = await prisma.contact.findUnique({
      where: { id: Number(req.params.id) },
    });
    if (!contact) return res.status(404).json({ error: "Contact not found" });
    res.json(contact);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch contact" });
  }
});

// ✅ Update contact
router.put("/:id", async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const updatedContact = await prisma.contact.update({
      where: { id: Number(req.params.id) },
      data: { name, email, phone },
    });
    res.json(updatedContact);
  } catch (err) {
    res.status(500).json({ error: "Failed to update contact" });
  }
});

// ✅ Delete contact
router.delete("/:id", async (req, res) => {
  try {
    await prisma.contact.delete({
      where: { id: Number(req.params.id) },
    });
    res.json({ message: "Contact deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete contact" });
  }
});

export default router;
