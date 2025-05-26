'use client';

import { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { User, updateUser, deleteUser } from "@/actions/users";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type Props = {
  users: User[];
};

export default function PageComponent({ users }: Props) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const [email, setEmail] = useState("");
  const [type, setType] = useState<"ADMIN" | "USER">("USER");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>("");

  const openEditDialog = (user: User) => {
    setSelectedUser(user);
    setEmail(user.email);
    setType(user.type);
    setAvatarPreview(user.avatar_url);
    setAvatarFile(null);
    setDialogOpen(true);
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    setAvatarFile(file);

    // Preview
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.result) setAvatarPreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async (e: FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;

    // Nếu không upload ảnh mới thì giữ nguyên avatar_url cũ
    let avatar_url = selectedUser.avatar_url;

    // Nếu có avatar mới thì upload (giả sử bạn có hàm uploadFile)
    if (avatarFile) {
      // TODO: upload file lên storage và lấy url trả về, ví dụ:
      // avatar_url = await uploadFile(avatarFile);
      // Tạm thời giả sử uploadFile trả về url như sau:
      avatar_url = URL.createObjectURL(avatarFile);
    }

    try {
      await updateUser(selectedUser.id, email, type, avatar_url);
      setDialogOpen(false);
      setSelectedUser(null);
      window.location.reload(); // cập nhật lại giao diện sau khi sửa
    } catch (error) {
      alert("Error updating user: " + error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      await deleteUser(id);
      await deleteUser(id);
      window.location.reload(); // cập nhật lại giao diện sau khi xóa

    } catch (error) {
      alert("Error deleting user: " + error);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">User Management Dashboard</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Avatar</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.type}</TableCell>
              <TableCell>
                {user.avatar_url && (
                  <Image
                    src={user.avatar_url}
                    alt="avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
              </TableCell>
              <TableCell>
                {user.created_at
                  ? new Date(user.created_at).toLocaleDateString()
                  : "N/A"}
              </TableCell>
              <TableCell>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => openEditDialog(user)}
                  className="mr-2"
                >
                  Edit
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSave}>
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border rounded p-2"
                />
              </div>

              <div>
                <label className="block font-semibold mb-1">Type</label>
                <Select value={type} onValueChange={val => setType(val as "ADMIN" | "USER")}>
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ADMIN">ADMIN</SelectItem>
                    <SelectItem value="USER">USER</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block font-semibold mb-1">Avatar</label>
                {avatarPreview && (
                  <Image
                    src={avatarPreview}
                    alt="avatar preview"
                    width={80}
                    height={80}
                    className="rounded-full mb-2"
                  />
                )}
                <input type="file" accept="image/*" onChange={handleAvatarChange} />
              </div>

              <DialogFooter>
                <Button type="submit">Save</Button>
                <Button variant="outline" onClick={() => setDialogOpen(false)}>
                  Cancel
                </Button>
              </DialogFooter>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
